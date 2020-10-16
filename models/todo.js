module.exports = (sequelize, DataTypes) => {
    const Todos = sequelize.define('Todos', {
        title: DataTypes.STRING,
        description: DataTypes.STRING
    });

    return Todos;
};