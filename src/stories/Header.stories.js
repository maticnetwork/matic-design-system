import Header from '../components/Header/Header.vue';

export default {
    title: 'Header',
    component: Header,
    argTypes: {
        transactionStatus: { control: { type: 'select', options: [null, 'action', 'progress'] } },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Header },
    template: '<Header v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    appName: 'Wallet',
    metamaskAddress: '0x2bjh34jb42bjh34jb42bjh34jb42bjh34jb4',
    userFormattedAddress: 'Account Name',
    userProfilePic: 'profile/profile-1',
    transactionCount: 2,
    transactionStatus: 'progress',
    transactionText: 'Action In Progress',
    transactions: [
        {
            "amount": 0.1,
            "createdAt": {
                "seconds": 1603435256,
                "nanoseconds": 0
            },
            "status": 3,
            "tokenId": "1edsfdsf77-b0df-45c2-b2b0-bf8d9ad94e8c",
            "txHash": "0xb51b40a7dc60c037842784247a251fe7f4471eb13f9e7bd26ec8d8ba8322",
            "updatedAt": {
                "seconds": 1603435267,
                "nanoseconds": 613000000
            },
            "_id": "0xb51b407834758935yhefg9454442a66e0a251fe7f4471eb13f9e7bd26ec8d8ba8322",
            "type": "deposit",
            "token": {
                "addresses": {
                    "5": "0x60D4dBb3hjb43b4jhb8b0BED6c486fe13E604Fc",
                    "80001": "0xA6FA4fB2347823gb78d61B04b0ecd319C5d1C0aa"
                },
                "decimals": "18",
                "icon": "ether.png",
                "id": "1e8jsnd7-b01dfsdf-fdfddf2-b2b0-bf8d9ad94e8c",
                "name": "Ether",
                "symbol": "ETH",
                "updatedAt": {
                    "seconds": 1603441821,
                    "nanoseconds": 732000000
                },
                "usd": "415.10821629",
                "isPoS": true
            },
            "timestamp": "12:11:07 • 23 October 2020",
            "icon": "token/eth"
        },
        {
            "amount": 0.1,
            "createdAt": {
                "seconds": 1603435256,
                "nanoseconds": 0
            },
            "status": 3,
            "tokenId": "1edsfdsf77-b0df-45c2-b2b0-bf8d9ad94e8c",
            "txHash": "0xb51b40a7dc60c0378sfsdf424457a251fe7f4471eb13f9e7bd26ec8d8ba8322",
            "updatedAt": {
                "seconds": 1603435267,
                "nanoseconds": 613000000
            },
            "_id": "0xb51b407834758935yhefg9454442a66e0a251fe7f4471eb13f9e7bd26ec8d8ba8322",
            "type": "withdraw",
            "token": {
                "addresses": {
                    "5": "0x60D4dBb3hjb43b4jhb8b0BED6c486fe13E604Fc",
                    "80001": "0xA6FA4fB2347823gb78d61B04b0ecd319C5d1C0aa"
                },
                "decimals": "18",
                "icon": "ether.png",
                "id": "1e8jsnd7-b01dfsdf-fdfddf2-b2b0-bf8d9ad94e8c",
                "name": "Ether",
                "symbol": "ETH",
                "updatedAt": {
                    "seconds": 1603441821,
                    "nanoseconds": 732000000
                },
                "usd": "415.10821629",
                "isPoS": true
            },
            "timestamp": "12:11:07 • 23 October 2020",
            "icon": "token/eth"
        },

        {
            "amount": 500,
            "createdAt": {
                "seconds": 1603435256,
                "nanoseconds": 0
            },
            "status": 3,
            "tokenId": "1edsfdsf77-b0df-45c2-b2b0-bf8d9ad94e8c",
            "txHash": "0xb51b4y8y3h5newrnnsdf898e7f4471eb13f9e7bd26ec8d8ba8322",
            "updatedAt": {
                "seconds": 1603439967,
                "nanoseconds": 613000000
            },
            "_id": "0xb51b407834758935yhefg9454442a66e0a251fe7f4471eb13f9e7bd26ec8d8ba8322",
            "type": "withdraw",
            "token": {
                "addresses": {
                    "5": "0x60D4dBb3hjb43b4jhb8b0BED6c486fe13E604Fc",
                    "80001": "0xA6FA4fB2347823gb78d61B04b0ecd319C5d1C0aa"
                },
                "decimals": "18",
                "icon": "ether.png",
                "id": "1e8jsnd7-b01dfsdf-fdfddf2-b2b0-bf8d9ad94e8c",
                "name": "Ether",
                "symbol": "ETH",
                "updatedAt": {
                    "seconds": 1603441821,
                    "nanoseconds": 732000000
                },
                "usd": "415.10821629",
                "isPoS": true
            },
            "timestamp": "12:11:07 • 23 October 2020",
            "icon": "token/eth"
        },
    ],
};

export const Pending = Template.bind({});
Pending.args = {
    appName: 'Wallet',
    metamaskAddress: '0x2bjh34jb42bjh34jb42bjh34jb42bjh34jb4',
    transactionCount: 2,
    transactionStatus: 'action',
    transactionText: 'Action Required',
};

export const NoCount = Template.bind({});
NoCount.args = {
    appName: 'Wallet',
    metamaskAddress: '0x2bjh34jb42bjh34jb42bjh34jb42bjh34jb4',
    transactionStatus: 'action',
    transactionText: 'Action Required',
};

export const NoMetamaskAddress = Template.bind({});
NoMetamaskAddress.args = {
    appName: 'Wallet',
};
