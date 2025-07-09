import monesh from './404.module.css';

export default function Custom404() {
  return (
    <div className={monesh.container}>
      <h1 className={monesh.heading}>404 - Page Not Found</h1>
      <p className={monesh.message}>Hey Monesh, this page doesn't exist 😢</p>
    </div>
  );
}