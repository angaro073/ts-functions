// Without parameters and brackets (only one statement)
const welcome1 = (): void => console.log('Welcome!!!');
welcome1();

// With parameters and brackets
const welcome2 = (title: string, content: string): void => {
  console.log(`${title} : ${content}`);
};
welcome2('This is the welcome', 'Welcome!!!');

// As a class property
class receptionist {
  static welcome = (title: string, content: string): void => {
    console.log(`${title} : ${content}`);
  };
}
receptionist.welcome('This is the welcome of recepcionist', 'Welcome!!!');