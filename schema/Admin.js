

const schema = {
    login_id: String,
    password: String,
}

export const getSchema = () => {
    return schema;
}

export const adminSchema = (app, mongoose) => {
    const _schema = schema;

    var AdminSchema = new mongoose.Schema(_schema);

    AdminSchema.index({
        
    });
    AdminSchema.set('autoIndex', (app.get('env') === 'development'));

    app.db.model('Admin', AdminSchema);
    module.exports = app.db.model('Admin', AdminSchema);
};