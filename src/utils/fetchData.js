export async function getData(setUsers) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  } catch (error) {
    console.log(error);
  }
}

export async function postData(setUsers) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
    });
    const data = await res.json();
    setUsers(data);
  } catch (error) {
    console.log(error);
  }
}

