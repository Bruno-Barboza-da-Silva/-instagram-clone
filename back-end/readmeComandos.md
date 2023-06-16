npx sequelize-cli db:create 
npx sequelize-cli migration:generate --name create-users
*caso tenha errado na migration fazer "npx sequelize-cli db:migrate:undo" e depois "npx sequelize-cli db:migrate"
npx sequelize-cli db:migrate
