let gradec=function(student,total)
{let per=(student/total)*100
    if(per>=90)
    {
        return `${student}/${total} -> You got A Grade ${per}`
    }
    else if(per>=80)
    {
        return `${student}/${total} -> You got B Grade ${per}`
    }
    else if(per>=70)
    {
        return `${student}/${total} -> You got C Grade ${per}`
    }
    else if(per>=60)
    {
        return `${student}/${total} -> You got D Grade ${per}`
    }
    else
    {
        return `${student}/${total} -> You got F Grade ${per}`
    }
}
console.log(gradec(14,20))