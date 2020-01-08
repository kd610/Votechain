const schema = {
    name: String,
    email: String, //ID
    image: String,
    hasVoted: Boolean,
    isValid: Boolean,
    constituency: String,
    created: {
        type: Date,
        default: Date.now
    }
}

export const getSchema = () => {
    return schema;
}

export const voterSchema = (app, mongoose) => {
    const _schema = schema;

    var VoterSchema = new mongoose.Schema(_schema);

    VoterSchema.index({
            
    });
    VoterSchema.set('autoIndex', (app.get('env') === 'development'));

    app.db.model('Voter', VoterSchema);
};