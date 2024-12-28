export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchBlogs = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error("Fetching Blogs");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error Fetchig Blogs :", error);
  }
};

export const fetchBlog = async (slugText) => {
  try {
    const res = await fetch(BASE_URL + `live?slug=${slugText}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error("Error Fetching Blog");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error Fetching Blog: ", error);
  }
};
