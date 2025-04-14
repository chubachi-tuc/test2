const tasks = [
    {
        id: 'Task 1',
        name: '企画',
        start: '2023-10-01',
        end: '2023-10-15',
        progress: 80,
    },
    {
        id: 'Task 2',
        name: '開発',
        start: '2023-10-15',
        end: '2023-11-15',
        progress: 50,
    },
    {
        id: 'Task 3',
        name: 'テスト',
        start: '2023-11-15',
        end: '2023-12-15',
        progress: 20,
    },
    {
        id: 'Task 4',
        name: 'リリース',
        start: '2023-12-15',
        end: '2024-01-15',
        progress: 0,
    }
];

const gantt = new Gantt('#gantt', tasks, {
    viewMode: 'Month', // 表示モード（Day, Week, Month, Year）
    on_click: (task) => {
        console.log(task); // タスククリック時の処理
    },
    on_date_change: (task, start, end) => {
        console.log(task, start, end); // タスクの期間変更時の処理
    },
    on_progress_change: (task, progress) => {
        console.log(task, progress); // タスクの進捗変更時の処理
    },
    on_view_change: (mode) => {
        console.log(mode); // 表示モード変更時の処理
    }
});