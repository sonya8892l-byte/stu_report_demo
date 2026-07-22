import './styles.css';
import studentLearningPage from './pages/student-learning.html?raw';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('应用挂载节点 #app 不存在。');
}

app.innerHTML = studentLearningPage;
await import('./app-controller.js');
