const a = async (ctx) => {
    ctx.body = "a";
};

const b = async (ctx) => {
    ctx.body = "b";
};

module.exports = {
    a,
    b,
};