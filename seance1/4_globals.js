// var hello = "Bonjour"

// console.log(hello);
//Hello est uniqument reconnu dans ce module
// console.log(global);

// console.log(global.hello);

// console.log(__dirname);
// console.log(__filename);

// console.log(process.argv);


// function parseName(username) {
// 	var index = process.argv.indexOf(username);
// 	return (index === -1) ? null : process.argv[index+1];
// }

// var user = parseName('--username');

// if (!user) {
// 	console.log("Aucun utilisateur!");
// } else {
// 	console.log(`Bonjour ${user}`);
// }


process.stdout.write("  Veuillez saisir votre Nom  \n\n");
process.stdout.write(" > ");

process.stdin.on('data', function(data) {
    process.stdout.write("Bonjour " + data.toString());
    process.exit();
	});

process.on('exit', function() {
    process.stdout.write("Au revoir ");
    process.exit();
	});
