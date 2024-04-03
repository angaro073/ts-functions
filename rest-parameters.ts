function list(listTitle: string, ...listElements: string[]): void {
  console.log(listTitle + " : [" + listElements.join(", ") + "]");
}
list("Users", "Steve", "Bill");
list("Users");