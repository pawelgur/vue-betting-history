export const coupons = [
    {
        id: 1,
        date: "2018-11-07 11:50",
        type: "single",
        stake: 1,
        odds: 1.93,
        possibleWin: 1.93,
        status: "opened",
        selections: [
            {
                id: 1,
                date: "2019-02-20 22:00",
                category: "Football",
                event: "Atletico Mardrid - Juventus FC",
                odds: 1.93,
                market: "Total Goals",
                marketVariation: "Under (2)"
            }
        ]
    },
    {
        id: 2,
        date: "2019-12-01 11:50",
        type: "single",
        stake: 1,
        odds: 1.93,
        possibleWin: 2,
        status: "won",
        selections: [
            {
                id: 2,
                date: "2019-02-20 22:00",
                category: "Football",
                event: "Atletico Mardrid - Juventus FC 2",
                odds: 1.93,
                market: "Total Goals",
                marketVariation: "Under (2)"
            }
        ]
    },
    {
        id: 3,
        date: "2020-05-07 11:50",
        type: "double",
        stake: 20,
        odds: 3.52,
        possibleWin: 70,
        status: "lost",
        selections: [
            {
                id: 3,
                date: "2019-02-20 22:00",
                category: "Football",
                event: "Atletico Mardrid - Juventus FC 3",
                odds: 1.93,
                market: "Total Goals",
                marketVariation: "Under (2)"
            },
            {
                id: 4,
                date: "2019-02-21 22:00",
                category: "Football",
                event: "Atletico Mardrid - Juventus FC 3",
                odds: 1.93,
                market: "Total Goals",
                marketVariation: "Under (2)"
            }
        ]
    }
]