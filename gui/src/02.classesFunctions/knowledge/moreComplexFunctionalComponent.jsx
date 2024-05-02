const Greeting = () => {
  const greeting = "Hello, welcome to the app!";
  return (
    <div>
      <button onClick={(/* This fails in VSCode(Microsoft Edge Tools) for some reason. Not sure where to report the bug. */) => alert(greeting)}>Greet Me!</button> {/* On click, show an alert with the greeting */}
    </div>
  )
}

export default Greeting; // decent example of hard-coding data