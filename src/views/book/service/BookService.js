import axios from "axios";
import { APIurl } from "helper/API";
import { AuthHeader } from "helper/AuthHeader";

export const GetBooks = async () => {
  return await axios.get(APIurl + "/book", AuthHeader());
};

export const CreateBook = async (book) =>
  await axios.post(APIurl + "/book", book, AuthHeader());

export const UpdateBook = async (book, id) =>
  await axios.put(APIurl + "/book/" + id, book, AuthHeader());

export const UpdateBookWithImage = async (book, id) =>
  await axios.put(APIurl + "/book/file/" + id, book, AuthHeader());

export const GetBookByID = async (id) =>
  await axios.get(APIurl + "/book/" + id, AuthHeader());

export const DeleteBookByID = async (id) =>
  await axios.delete(APIurl + "/book/" + id, AuthHeader());

export const BuyBookByID = async (id) =>
  await axios.put(APIurl + "/book/buy/" + id, AuthHeader());
