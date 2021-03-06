# How to use context API with state
- Any component hierarchy that may need access to certain data should be wrapped in the Context.Provider component.
- Any component within the hierarchy that may need that data from the context should:
  - be wrapped in Context.Consumer, or
  - can use the useContext hook, or
  - can set the static contextType value to Context (only works for class components)
- This will make the data available to the component through the context variable, generally made available using an anonymous function parameter.
- This is sufficient if the child component has no need to change this data. If the data is changed in child component by assigning the specific variable or object property a new value, this change will not be reflected in the original data that was passed down through the value attribute of Context.Provider .
- If the child component does need to change the data, a good way to handle this would be to use the useState hook in the parents component and pass the data, as well as function with the ability to change that data, down through Context.Provider . The function can then be used to change the data and have it be reflected in the parent component and elsewhere.