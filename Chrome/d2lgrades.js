// Get "Grades" header and weighted grades
var grades_heading = document.getElementsByClassName("vui-heading-1")[0];
var grade_rows = document.getElementsByTagName("tr");
var grade_cols_len = grade_rows[0].childElementCount;
var grade_sums = [0, 0, 0, 0];  //[Grade, TotalGrade, Weight, TotalWeight]

// Make list of grades/weights
var curnode;
var curgrade;

// Find which column contains the "points" segment
let grade_header = grade_rows[0].getElementsByTagName("th");
let pointsIndex;
for (let i = 0; i < grade_header.length; i++) {
    console.log(i + grade_header[i].textContent)
    if (grade_header[i].textContent === "Points") {
        pointsIndex = i;
    }
}
console.log(pointsIndex == null ? "Points index not found, assuming 2" : "Points index found, " + pointsIndex);
pointsIndex = pointsIndex == null ? 2 : pointsIndex;

for (var i = 1; i < grade_rows.length; ++i) {
    if (grade_rows[i].childElementCount == grade_cols_len) {
        curnode = grade_rows[i].childNodes[pointsIndex];
        curgrade = curnode.getElementsByTagName("label")[0].textContent.split('/');
        // Add values to sums
        console.log("curgrade: " + curgrade)
        // If neither number is -, add to both grade and total grade
        if (curgrade[0] != '- ' && curgrade[1] != ' -') {
            grade_sums[0] += parseFloat(curgrade[0]);
            grade_sums[1] += parseFloat(curgrade[0]);
            grade_sums[2] += parseFloat(curgrade[1]);
            grade_sums[3] += parseFloat(curgrade[1]);

        } // if()
        // If first number is -, and last number is valid, treat as a 0 for total grade but ignore for grade
        else if (curgrade[0] == '- ' && curgrade[1] != ' -') {
            //grade_sums[0]+=parseFloat(curgrade[0]);
            //grade_sums[0]+=parseFloat(curgrade[0]);
            //grade_sums[1]+=parseFloat(curgrade[2]);
            grade_sums[2] += parseFloat(curgrade[1]);
        }
        // If second number is null, assume bonus assignment
        else if (curgrade[0] != '- ' && curgrade[1] == null) {
            grade_sums[0] += parseFloat(curgrade[0]);
            grade_sums[2] += parseFloat(curgrade[0]);
        }
        console.log(grade_sums);
    } // if()
} // for()

grade_sums[0] = grade_sums[0].toFixed(2);
var total_grade = ((grade_sums[0] / grade_sums[2]) * 100);
var graded_grade = ((grade_sums[1] / grade_sums[3]) * 100);

// Modify header
//grades_heading.innerHTML = "Grades \n(Total: " + total_grade.toFixed(2) + "%, Graded: " + graded_grade.toFixed(2) + "%)";

// Add new table rows below row 1
var newTotalRow = document.createElement("tr");
var newGradedRow = document.createElement("tr");
var dataNode = document.createElement("td");

// Total Grade Row
var totalSpaces = ['Total Grade', grade_sums[0] + " / " + grade_sums[2], total_grade.toFixed(2) + '%'];
for (var i = 0; i < grade_cols_len; ++i) {
    var curClone = dataNode.cloneNode();
    curClone.textContent = totalSpaces[i];
    newTotalRow.appendChild(curClone);
}
newTotalRow.firstChild.style = "text-align:left";
if (document.getElementsByClassName("d_g_treeNodeImage").length > 0) {
    newTotalRow.insertBefore(document.createElement("th"), newTotalRow.firstChild);
}

// Graded Grade Row
var gradedSpaces = ['Graded Grade', grade_sums[1].toFixed(2) + " / " + grade_sums[3], graded_grade.toFixed(2) + '%'];
for (var i = 0; i < grade_cols_len; ++i) {
    var curClone = dataNode.cloneNode();
    curClone.textContent = gradedSpaces[i];
    newGradedRow.appendChild(curClone);
}
newGradedRow.firstChild.style = "text-align:left";
if (document.getElementsByClassName("d_g_treeNodeImage").length > 0) {
    newGradedRow.insertBefore(document.createElement("th"), newGradedRow.firstChild);
}

console.log(grade_cols_len);

grade_rows[0].after(newTotalRow);
newTotalRow.after(newGradedRow);
