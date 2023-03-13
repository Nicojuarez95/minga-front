import { useSelector } from "react-redux"
import Swal from "sweetalert2"



export default function Alert() {

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    
    const visible = useSelector(store => store.alert.visible)
    const icon = useSelector(store => store.alert.icon)
    const title = useSelector(store => store.alert.title)

    if ( visible){
        Toast.fire({
            icon: icon,
            title: title,
          })
    }
    

  return (
    <></>
  )
}
