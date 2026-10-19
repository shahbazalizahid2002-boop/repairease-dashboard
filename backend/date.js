const getDate = () => {
  let date = new Date();


  console.log(
    "Readable Date:",
    date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );

 
  console.log("Local Date String:", date.toLocaleDateString());

  // Separate parts
  console.log(date.getDate());
  console.log( date.getMonth() + 1);
  console.log( date.toLocaleDateString("en-GB", { month: "long" }));
  console.log( date.getFullYear());
  console.log( date.toLocaleDateString("en-GB", { weekday: "long" }));

  // Time in one line
  console.log( date.toLocaleTimeString());
};

export default getDate;