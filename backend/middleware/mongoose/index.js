module.exports = (mongoose) => {
    //mongoose settings to fix deprecation warnings
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
}