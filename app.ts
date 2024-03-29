#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";




console.log(chalk.red.bold.italic(`
**********
TODO LIST
**********`));



let todoArray = [];
while(true){
    let answer = await inquirer.prompt([
        {
            type : 'list',
            message :" WELLCOME \n 'To Do List' \nWhat would you like to do?\nEnter 'new' to add in List.\nEnter 'list' to display list.\nEnter 'delete' to delete from list.\nEnter 'quit' to close the application",
            name : 'select',
            choices : ['new' , 'list' , 'delete' , 'quit']
        }
    ])
    if (answer.select === "new"){
        let newTodo = await inquirer.prompt([
            {
                message : "Enter new item",
                type : "input",
                name : 'new'
            }
        ])
        todoArray.push(newTodo.new);
        console.log(chalk.green.bold.italic(`"${newTodo.new}"" added in the list`))
    } else if (answer.select === "delete"){
        let deleteTodo = await inquirer.prompt([
            {
                message : "Enter index number you want to delete",
                type : "input",
                name : 'delete'
            }
        ])
        console.log(chalk.blue.bold.italic(`"${todoArray[deleteTodo.delete]}" deleted from the list.`));
        todoArray.splice(deleteTodo.delete,1);
    } else if (answer.select === "list"){
        console.log(chalk.yellow.bold.italic("================================="));
        console.log('            "To Do List"')
        for(let item of todoArray){
        console.log(todoArray.indexOf(item) + ": " + item);
        }
        if(todoArray[0]===undefined){
            console.log("No Entries")
        }
        console.log(chalk.yellow.bold.italic("================================="));
    }
    if(answer.select==="quit"){
        console.log(chalk.red.bold.italic(`
        **************************
        Thanks for using todo list
        **************************`));
        
        break
    }
}




