# Instructions

Exercises: 

  1. Spend some time getting familiar with the provided `mit_license.txt` file which contains a copy of the MIT License for the famous, ficticious software developer, _Copy McCattington_. Write a Node.js commandline script, name the file `mit.js`, that takes in an argument for the file's name (in this case `mit_license.txt`) and then `console.log`s an object with a word count for each word in the license. For the purpose of this word count `the`, `The`, `THE`, etc. are all the same word.
  
    For example, if you look at the `smaller_sample.txt` file included in this repository, the logged object would look like:
  ```
  { this: 3, counts: 3, a: 1, lot: 1 }
  ```

  1. Read a few random lines in the `dev_talk.txt` for a nice laugh. Write a Node.js command line script, name the file `talk.js`, that takes in an argument for the file's name (in this case `dev_talk.txt`) and then `console.log`s an object with the average number of non-newline (`\n`) characters in each line.

    For example, if you look at the `smaller_sample.txt` file included in this repository, the response would be:
    ```
    Average number of characters per line: 13
    ```

  1. Review the `org_chart.txt` file included in this repository which contains the organization chart for a rather flat company. That is, there is only one level deep of management, every person is either a manager or the employee of the last listed manager. Managers have no indentation for their entry in the text file and employees have 2 spaces. Again you are writing a Node.js command line script, name the file `org.js`, and have it take a command line argument for the file's name (in this case `org_chart.txt`) and then `console.log` an object where each property is the name of a manager and each value is an array of their employee's names.

    For example, if you look at the `mini_org_chart.txt` file included in this repository, the repsonse would be:
    ```
    { 'Boris Langworth': [ 'Daphney O\'Conner', 'Chad Breitenberg' ],
      'Cody Schaden': [ 'Marcella Bashirian', 'Kenneth Romaguera', 'Lew Daugherty' ] }
    ```
