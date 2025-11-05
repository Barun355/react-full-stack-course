import { Client, TablesDB } from "appwrite";

const DB_ID = "68fc9c48000217763f85"

export const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("68fb54f300226f889687"); // Replace with your project ID



const tablesDB = new TablesDB(client)

async function getAllRecipes() {
    const res = await tablesDB.listRows({
        databaseId: DB_ID,
        tableId: "recipe",
    })

    const recipes = res.rows;

    console.log(recipes)

    if (recipes.length === 0) {
        return []
    }

    return recipes;
}

async function getRecipeById(id) {
    // TODO: call tablesDB method to find the recipe by the id
}

export {
    getAllRecipes
}