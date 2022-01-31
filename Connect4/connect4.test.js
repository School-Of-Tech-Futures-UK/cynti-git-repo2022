const horizontalWinnerModule = require('./connect4_pure');

// horizontalWinner() test
describe('when 4 consecutive horizontal slots are placed', () => {
    
    // Arrange

    const tests =
    [   // test 1
        [
            {
                grid: [
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null]
                ],
                player: 'red',
                column: 1 && 2 && 3 && 4
            },

            //structure with the result

            [
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, 'red', 'red', 'red', 'red', null, null]
            ]
        ],

        // test 2

        [
            {
                grid: [
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null]
                ],
                player: 'red',
                column: 0 && 1 && 2 && 3
            },

            //structure with the result

            [
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                ['red', 'red', 'red', 'red', null, null, null]
            ]
        ],

        // test 3

        [
            {
                grid: [
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null]
                ],
                player: 'red',
                column: 2 && 3 && 4 && 5
            },

            //structure with the result

            [
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, 'red', 'red', 'red', 'red', null]
            ]
        ],

        // test 4

        [
            {
                grid: [
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                ],
                player: 'red',
                column: 3 && 4 && 5 && 6
            },

            //structure with the result

            [
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, 'red', 'red', 'red', 'red']
            ]
        ],
    ]

    it.each(test)('function returns true', (input, expectedOutput) => {

        // Act
            const actualOutput = horizontalWinnerModule.horizontalWinner(input.grid, input.player, input.column)
       
        // Assert
            expect(actualOutput).toStrictEqual(expectedOutput)

    })
})