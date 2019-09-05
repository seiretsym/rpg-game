# unit-4-b RPG Game

## Summary
A game where the user picks a job and battle with the remaining jobs to claim superiority of jobs. Win by defeating all other jobs!

### **Functions:**
- Other jobs become selectable opponents after player chooses a job
- Game restart button appears when player loses or wins
- Jobs move to the grids representing player and opponent
- Opponents Attack changes to their counter value after player chooses a job
- Info panel updates to let player know what to do
- Combat Log shows extra info for comprehension

### **Balancing:**
- Show opponent counter values so player can strategize instead of guessing

## Site Picture
![FFXIV: Internal Job Affairs](assets/images/readme.PNG)

## Technologies Used
- HTML
- Bootstrap
- Javascript
- Git
- GitHub
- VSCode

## Links
Live Page: https://seiretsym.github.io/unit-4-game<br>
Repo: https://github.com/seiretsym/unit-4-game<br>
LinkedIn: https://www.linkedin.com/in/kerwinhy/<br>
GitHub: https://github.com/seiretsym<br>

## Code Snippet
I chose these lines of code because they ensure that the clusters never carry the same value as other clusters. The goal can be achieved no matter what the cluster values are because it's based on the values of the clusters.
```
// generate random values for each cluster
function randCluster() {
    // generate random values for each cluster
    clust1.val(Math.floor(Math.random() * 11) + 2);
    clust2.val(Math.floor(Math.random() * 11) + 2);
    clust3.val(Math.floor(Math.random() * 11) + 2);
    clust4.val(Math.floor(Math.random() * 11) + 2);

    // randomize clust2 value if it's the same as clust1
    do {
        clust2.val(Math.floor(Math.random() * 11) + 2);
    }
    while (clust2.val() === clust1.val());

    // randomize clust3 value until it doesn't match clust1 or clust2
    do {
        clust3.val(Math.floor(Math.random() * 11) + 2);
    }
    while (clust3.val() === clust1.val() || clust3.val() === clust2.val());

    // randomize clust3 value until it doesn't match clust1 or clust2 or clust3
    do {
        clust4.val(Math.floor(Math.random() * 11) + 2);
    }
    while (clust4.val() === clust1.val() || clust4.val() === clust2.val() || clust4.val() === clust3.val()); 
}

// generate random value for goal based on cluster values
function randGoal(obj) {
    var total = 0;
    // generate a random value for goal based on cluster values
    total += clust1.val() * (Math.floor(Math.random() * 5) + 1);
    total += clust2.val() * (Math.floor(Math.random() * 5) + 1);
    total += clust3.val() * (Math.floor(Math.random() * 5) + 1);
    total += clust4.val() * (Math.floor(Math.random() * 5) + 1);

    // update goal value and text
    goal.val(total);
    goal.text(goal.val());
} 
```