# PropertyGo

To run:

1. Open the folder that contains 'client' and 'server' in Visual Studio Code
2. Create two terminals within VS Code, and cd into 'client' in one and 'server' in the other
3. Run 'npm install' in both terminals.
4. Create a MongoDB Atlas account, and copy the password of your user before you finish the setup. Store this somewhere safe, because you'll need to paste it into something later!
5. After clicking your cluster, click 'Connect', and then click 'Drivers'. Copy the code under the text that says 'Add your connection string into your application code'.
6. Create a file named .env in your server folder, put ATLAS_URI=*connection string*, and paste your password where it says <password> (remove the parentheses).
7. Make a newline, and put PORT=5000 in this new second line. The contents of the first line of your .env file should be something like: ``` ATLAS_URI=mongodb+srv://hello:dsE6rervvYC@cluster0.4seakyn.mongodb.net/?retryWrites=true&w=majority ``` , and the contents of the second line of your .env file should be ```PORT=5000```
8. Run 'npm install' in both your 'client' and 'server' terminal.
9. Ctrl-click the link in your 'client' terminal.
