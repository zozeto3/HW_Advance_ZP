function foo() {
    console.log(`arguments in foo:`);
    console.log(arguments);

    const bar = () => {
        console.log(`arguments in bar:`);
        console.log(arguments);
    }
    bar(4, 5, 6);
}

foo(1, 2, 3);

// arguments in foo:
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// arguments in bar:
// [Arguments] { '0': 1, '1': 2, '2': 3 }