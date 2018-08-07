$( document ).ready(function(){
    
    var _data = []
    var _data = '186,699,132,272,291,331,199,1890,788,1601'

    $('#calculate').click(function(){
        data = $('#input_numbers').val()
        _data = separateData(data)
        if(_data.length > 3){
            result = calculate(_data)
            console.log(result)
            if(result == 0){
                $('.messages').html("There was an error")
                cleanUp()
                return
            }
            if(result.mean != 'NaN' && result.std_deviation != 'NaN'){
                addResult(result)
                $('.messages').html("")
            }else{
                $('.messages').html("There was an error")
                cleanUp()
            }
        }else{
            $('.messages').html("Error: Enter at least 4 values")
            cleanUp()
        }
    });

    function cleanUp(){
        $('#result_count').html("")
        $('#result_mean').html("")
        $('#result_std_deviation').html("")
    }

    function addResult(result){
        $('#result_count').html(result.count)
        $('#result_mean').html(result.mean)
        $('#result_std_deviation').html(result.std_deviation)
    }
    

    function calculate(data){
        

        if(data == 0)
            return "Error"
        else{
            mean = calculateMean(data)
            std_deviation = calculateStandardDeviation(data)

            return response = ({
                    'count' : data.length,
                    'mean' : mean,
                    'std_deviation' : std_deviation
            });
        }           

    }

    function calculateMean(_data){
        return (_data.reduce((a, b) => a + b, 0) / _data.length).toFixed(2)
    }

    function calculateStandardDeviation(_data){

        var sum = 0
        mean = calculateMean(_data)
        _data.forEach(number => {
            sum +=Math.pow( number - mean, 2)
        });

        std = Math.sqrt(sum / (_data.length - 1))
        return std.toFixed(2)

    }


    function separateData(data){
        if(data == null || data == undefined || data == "empty")
            return 0        
        else
            return data.split(",").map(Number)          
    }



    function print(x){
        console.log(x)
    }


    

   

});