function insert(n){
            document.form.calculator.value = document.form.calculator.value+n;
        }
        function equal(){
            var expr = document.form.calculator.value;
            if(expr){
                document.form.calculator.value = eval(expr)
            }
            else {
				alert("something wrong");
			}
        }
        function c(){
            document.form.calculator.value = null;

		}
		function sqrt(){
			
			 document.form.calculator.value=Math.sqrt();
		}
		function abs(){
			 document.form.calculator.value=Math.abs();	
		}
function ph_num(num)
{
	var phnum = /^\d{10}$/;
	if(num.value.match(phnum))
	{
		return true;
	}
	else	
	{
		window.alert("not a valid phone number");
		return false;
	}
}
