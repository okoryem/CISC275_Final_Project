import "./ProgressBar.css"
interface ProgressBarProps {
  value: number
}
export function ProgressBar(props: ProgressBarProps) {
  const progress = document.getElementById('progress');
  
  
    if (progress){
      progress.style.width = `${props.value}%`;
    }
  return (

  <div>
    <div className="progress-container">
      <div className="progress" id="progress"></div>
    </div>
  </div>



  )
}
