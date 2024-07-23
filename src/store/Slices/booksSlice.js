import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  booksCopy: [],
  loading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=javascript');
    if (!response.ok) {
      throw new Error('Failed to fetch books.');
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    filterBookList: (state, action) => {
      const search = action.payload.search;
      const filteredBooks = state.booksCopy.filter((book) => {
        return book.volumeInfo.authors.join(', ').toLowerCase().includes(search.toLowerCase()) || book.volumeInfo.title.toLowerCase().includes(search.toLowerCase());
      });
      state.books = filteredBooks;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
        state.booksCopy = [...action.payload];
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { filterBookList } = booksSlice.actions;
export const selectAllBooks = (state) => state.books.books;


export default booksSlice.reducer;
