var app = getApp();
Page({
    data: {},
    onLoad: function (e) {
        var that = this;
    },
    onShow: function () {
        var that = this;
        that.setData({
            info: {
                order_sn:"123123",
                status: -8,
                status_desc: "待支付",
                deadline:"2022-05-25 12:00",
                pay_price: "85.00",
                yun_price: 0.00,
                total_price: "85.00",
                address: {
                    name: "DH",
                    mobile: "12345678901",
                    address: "广东省广州市"
                },
                goods: [
                    {
                        name: "小鸡炖蘑菇",
                        price: "85.00",
                        unit: 1,
                        pic_url: "/images/food.jpg"
                    },
                    {
                        name: "小鸡炖蘑菇",
                        price: "85.00",
                        unit: 1,
                        pic_url: "/images/food.jpg"
                    }
                ]
            }
        });
    }
});