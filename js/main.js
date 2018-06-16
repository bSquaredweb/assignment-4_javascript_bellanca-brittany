var president1 = {
    firstName: 'Donald',
    lastName: 'Trump',
    termLength: '2',
    party: 'Republican',
    yearsOfPresidency: '2017-present'
};

var president2 = {
    firstName: 'Barack',
    lastName: 'Obama',
    termLength: '8',
    party: 'Democratic',
    yearsOfPresidency: '2009-2017'
};

var president3 = {
    firstName: 'George W.',
    lastName: 'Bush',
    termLength: '8',
    party: 'Republican',
    yearsOfPresidency: '2001-2009'
};

var president4 = {
    firstName: 'Bill',
    lastName: 'Clinton',
    termLength: '8',
    party: 'Democratic',
    yearsOfPresidency: '1993-2001'
};

var president5 = {
    firstName: 'George H.W.',
    lastName: 'Bush',
    termLength: '4',
    party: 'Republican',
    yearsOfPresidency: '1989-1993'
};

var presidents = [president1, president2, president3, president4, president5];

console.log(presidents[2].firstName, presidents[2].lastName);
