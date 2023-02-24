a = ['abc','bcd','cde']
ab=a[0].split("")
ab.reverse()
cb=ab.join("")
console.log(cb)

bc=a[1].split("")
bc.reverse()
cd=bc.join("")
console.log(cd)


ad=a[2].split("")
ad.reverse()
dc=ad.join("")
console.log(dc)

a= [cb,cd,dc]
console.log(a)