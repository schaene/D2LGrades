//Get "Grades" header and weighted grades
var grades_heading=document.getElementsByClassName("vui-heading-1")[0];
var grade_rows=document.getElementsByTagName("tr");
var grade_cols_len=grade_rows[0].childElementCount;
var grade_sums=[0, 0];  //[Grade, Weight]

//Make list of grades/weights
var curnode;
var curgrade;

for(var i=1; i<grade_rows.length;++i){
	if(grade_rows[i].childElementCount==grade_cols_len){
		curnode=grade_rows[i].childNodes[2];
		curgrade=curnode.getElementsByTagName("label")[0].textContent.split('/');
		//Add values to sums
		console.log("curgrade: "+curgrade)
		if(curgrade[0]!='- ' && curgrade[1]!=' -'){
			grade_sums[0]+=parseFloat(curgrade[0]);
			grade_sums[1]+=parseFloat(curgrade[1]);
			console.log(grade_sums);
		}//if()
	}//if()
}//for()

grade_sums[0]=grade_sums[0].toFixed(2)
var total_grade=((grade_sums[0]/grade_sums[1])*100);

//Modify header
grades_heading.innerHTML="Grades (Total: "+total_grade+"%)";

//Add new table row below row 1
var newrow=document.createElement("tr");
var datanode=document.createElement("td");
var tempspaces=['Total Grade', grade_sums[1]+'/100', grade_sums[0]+' / '+grade_sums[1], total_grade+'%'];
var curclone;
datanode.className="d_gn d_gr d_gt";
for(var i=0;i<grade_cols_len;++i){
	console.log("NEW COL")
	curclone=datanode.cloneNode();
	curclone.textContent=tempspaces[i];
	newrow.appendChild(curclone);
}//for()
newrow.firstChild.style="text-align:left";
if(document.getElementsByClassName("d_g_treeNodeImage").length>0){
	newrow.insertBefore(document.createElement("th"), newrow.firstChild);
}//if()
console.log(grade_cols_len);

grade_rows[0].after(newrow);
