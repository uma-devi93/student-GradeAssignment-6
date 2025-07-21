   var sid=parseInt(prompt("enter the id"));
        var sname=prompt("enter the name");
        var m1=parseInt(prompt("enter the Tamil 1"));
        var m2=parseInt(prompt("enter the English 2"));
        var m3=parseInt(prompt("enter the Maths 3"));
        var m4=parseInt(prompt("enter the Science 4"));
        var m5=parseInt(prompt("enter the Social 5"));
        var total=m1+m2+m3+m4+m5;
        var percentage=(total*100)/500.0;
        document.write("student id=:"+sid+"<br>")
        document.write("student name=:"+sname+"<br>")
        document.write("student Total=:"+total+"<br>")

        document.write("percentage=:"+percentage+"<br>")

        if(percentage>=90)
       {
     document.write("Grade A")
       }
       else if((percentage>=80) &&(percentage<90))
       {
     document.write("Grade B")

       }
 else if((percentage>=70) &&(percentage<80))
       {
     document.write("Grade C")

       }
 else if((percentage>=60) &&(percentage<70))
       {
     document.write("Grade D")

       }
        else if((percentage>=50) &&(percentage<60))
       {
     document.write("Grade E")

       }
       else{
             document.write("Grade F")

       }