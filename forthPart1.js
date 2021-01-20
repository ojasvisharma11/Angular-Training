<script>
    function AI(face, automation){
        document.writeln(face, "<br>", automation)
    }
    function DataScience(callback){
        callback("Ojasvi", "Automated")
    }
    DataScience(AI)

    {/* Nested Calla */}
    function Nested1(name, id, age){
        document.writeln("Started Nested1")
        document.writeln(name)
        document.writeln("Ended Nested1")
    }
    function Nested2(name, id, callback) {
        document.writeln("Started Nested2")
        callback(name, id, 20)
        document.writeln("Ended Nested2")
    }
    function Nested3(name, callback){
        document.writeln("Started Nested3")
        callback(name, 1, Nested1)
        document.writeln("Ended Nested3")
    }
    function Nested4(callback){
        document.writeln("Started Nested4")
        callback("Ojas", Nested2)
        document.writeln("Ended Nested4")
    }
    Nested4(Nested3)

    {/* Third Example */}
    
    
</script>