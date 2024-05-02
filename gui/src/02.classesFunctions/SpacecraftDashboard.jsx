/* eslint-disable no-undef */
// A functional component for a spacecraft dashboard that welcomes the pilot
const SpacecraftDashboard = () => {
  const pilot = {
    name: "Captain Astro"
  }
  // TODO: Declare a constant for the pilot's name 'Captain Astro' and personalize the welcome message in the h2 tag, and return it.
  return <h2>Welcome home, {pilot.name}</h2>;
}

export default SpacecraftDashboard;

/**
 * Cosmo's two cents
 * 
 * In functional components, unlike class components, we don't use `this` to reference variables.
 * Instead, you declare variables directly using `const` or `let` within the function body.
 * Also, your variable declaration for `pilot` is missing the `const` keyword, which is necessary to declare a variable properly.
 * 
 * const SpacecraftDashboard = () => {
 *   pilot = {
 *     name: "Captain Astro"
 *   }
 *   return <h2>Welcome home, ({this.pilot.name})</h2>;
 * }
 * 
 * I don't know why I had to go revisit class components and add confusion, but I felt like it.
 * 
 */
