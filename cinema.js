const Ticket = {
nom: "The Batman",
prix: 9,
numéroSalle: 7
}

let nom = "Client"

let textAffichage = "Bonjour " + nom + ", le prix de votre ticket pour le film " + Ticket.nom + " dans la salle numéro " + Ticket.numéroSalle + " est de " + Ticket.prix + " euros."

console.log(textAffichage)
