- [ ] Why would you use class component over function components (removing hooks from the question)?

The class component gives you access to more functionality like life cycle methods (ex:
componentWillMount and componentDidMount).

- [ ] Name three lifecycle methods and their purposes.

The Birth/Mounting Phase – where the component is being built, where initial data is defined on the
constructor

Growth/Updating Phase – changes to the component’s state data using setState.

Death/Un-mounting Phase – cleanup or Component removed from the screen.

- [ ] What is the purpose of a custom hook?

Custom hooks allow you to apply non-visual behavior and stateful logic throughout your components
by reusing the same hook over and over again.

- [ ] Why is it important to test our apps?

 Surfaces bugs faster.
 Reduces the risk of regressions.
 Allows us to trust the code.
 Makes us think about the edge cases.
 Acts as a safety net when making changes or refactoring.
 Acts as documentation for the code.
 Encourages us to write more testable (better!) code.