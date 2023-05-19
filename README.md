###### React practice vite collect form data
###### Usually we handle multiple onChange function for multiple input changes.
###### But we can make the code fewer by handling a single onChange function.
###### We will use the same onChange event in every input and from the onChange handling function, we will chcek the input name and go further depending on it. Like if the input name is "name" then we will proceed for name vice versa:

##### Here it is:

###### const handleChange = e => {
######   const inputName = e.target.name;
######   if (inputName === "name") {
######      setName(e.target.value);
######    }
######   if (inputName === "email") {
######      setEmail(e.target.value);
######   }
######    if (inputName === "password") {
######      setPass(e.target.value);
######    }
###### };

