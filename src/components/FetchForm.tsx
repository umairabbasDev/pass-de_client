import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../config";

type AddPass = {
  msg: any;
  password: string;
  source: string;
};

const BASE_URL: any = `${
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_BASE_URL
    : import.meta.env.VITE_BASE_URL_LOCAL
}api/pass`;

// ********************************** start testing
// import.meta.env.VITE_BA
// console.log(" env ", import.meta.env.MODE);
// ********************************** end testing

const initSate = {
  source: "",
  password: "",
  msg: "",
};

const FetchForm = () => {
  const [submitData, setsubmitData] = useState<AddPass>(initSate);

  const [response, setResponse] = useState<boolean>(false);
  const [consent, setConsent] = useState<boolean>(false);

  async function createUser(userData: AddPass) {
    try {
      // 👇️ const data: CreateUserResponse
      const { data } = await axios.post<AddPass>(BASE_URL, userData);
      console.log(JSON.stringify(data, null, 4));
      setResponse(true);
      toast.dark(data.msg);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        // 👇️ error: AxiosError<any, any>
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createUser(submitData);
  };

  const handleReset = () => {
    setsubmitData(initSate);
    setResponse(false);
  };
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      {response && (
        <div className="block text-lg font-extrabold mb-2 text-gray-900 dark:text-gray-300 ">
          Thanks for using our service
        </div>
      )}

      {!consent && (
        <div
          className="block p-2.5 w-10/12  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-6"
          id=""
        >
          <p className="text-justify">{config.home.description.text}</p>

          <div className="flex items-center mt-8">
            <input
              onChange={() => setConsent(true)}
              id="consent"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="consent"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                terms and conditions
              </a>
            </label>
          </div>
        </div>
      )}

      {consent && (
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col w-10/12 mb-8 mt-4"
        >
          <div className="mb-6  w-full">
            <label
              htmlFor="source"
              className="block capitalize  mb-2 text-lg  font-semibold text-gray-900 dark:text-gray-300 "
            >
              source
            </label>
            <input
              type="text"
              id="source"
              onChange={(e) =>
                setsubmitData({ ...submitData, source: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="wifi, Facebook, gmail, etc... "
            />
          </div>

          <div className="mb-6  w-full">
            <label
              htmlFor="password"
              className="block capitalize  mb-2 text-lg  font-semibold text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              onChange={(e) =>
                setsubmitData({ ...submitData, password: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password here "
              required
            />
          </div>

          {!response ? (
            <button
              style={{ backgroundColor: "#8884fa" }}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-#8884fa-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-#8884fa-600 dark:hover:bg-#8884fa-700 dark:focus:ring-#8884fa-800"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
            >
              An Other One
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default FetchForm;
