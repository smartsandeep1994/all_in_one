$(function () {
    let name = $('#name')
    let age = $('#age')
    let city = $('#city')
    let btn_submit = $('#register')
    let tbl_persons = $('#persons')

    function refreshPersonTable (persons) {
        tbl_persons.empty()
        tbl_persons.append(
            `<tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
             `
        )
        for(person of persons){
            tbl_persons.append(
                `<tr>
                    <td>${person.name}</td>
                    <td>${person.age}</td>
                    <td>${person.city}</td>
                </tr>
                `
            )
        }
    }
    $.get('/api/persons', function(data){
        refreshPersonTable(data)
    })

    btn_submit.click(function () {
        $.post('/api/persons', 
            {
                name:name.val(),
                age:age.val(),
                city:city.val(),
            },
            function(data){
                refreshPersonTable(data)
            }
        )
    })
})