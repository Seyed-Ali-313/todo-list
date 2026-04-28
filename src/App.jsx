// خط 1: import کردن hook های مورد نیاز از React
// useState: برای نگهداری داده‌هایی که تغییر می‌کنند (مثل لیست کارها)
// useEffect: برای کارهای جانبی مثل ذخیره در مرورگر
// useCallback: برای بهینه‌سازی توابع (تا هر بار رندر دوباره ساخته نشوند)
// useMemo: برای بهینه‌سازی مقادیر محاسباتی
import { useState, useEffect, useCallback, useMemo } from 'react';

// خط 2: import کردن فایل CSS برای استایل‌دهی
import './App.css';

// خط 3: تعریف کامپوننت اصلی برنامه
function App() {
  
  // ========== بخش 1: تعریف State ها (محل نگهداری داده‌ها) ==========
  
  // خط 4: state برای لیست کارها
  // todos: خود آرایه کارها (مقدار فعلی)
  // setTodos: تابعی برای تغییر دادن todos
  // useState([]): یعنی مقدار اولیه یک آرایه خالی است
  const [todos, setTodos] = useState([]);
  
  // خط 5: state برای متنی که کاربر توی input تایپ می‌کند
  // inputValue: مقدار فعلی input
  // setInputValue: تابع تغییر دادن آن
  // useState(''): مقدار اولیه رشته خالی
  const [inputValue, setInputValue] = useState('');
  
  // خط 6: state برای فیلتر (در این نسخه ساده فقط 'all' داریم ولی برای توسعه آینده نگهش میداریم)
  const [filter, setFilter] = useState('all');
  
  // خط 7: state برای شناسه کاری که در حال ویرایش است
  // editingId: اگر null باشد یعنی هیچ کاری در حال ویرایش نیست
  // اگر عددی باشد (مثلاً 123) یعنی آن کار خاص در حال ویرایش است
  const [editingId, setEditingId] = useState(null);
  
  // خط 8: state برای متنی که در حین ویرایش تایپ می‌شود
  // editingText: مقدار متنی که کاربر در حال تایپ کردن آن است
  const [editingText, setEditingText] = useState('');
  
  // ========== بخش 2: بارگذاری اطلاعات از حافظه مرورگر (Local Storage) ==========
  
  // خط 9: useEffect با آرایه خالی [] یعنی فقط یک بار در ابتدای بارگذاری صفحه اجرا می‌شود
  useEffect(() => {
    // خط 10: از localStorage مقداری که با کلید 'todos' ذخیره شده را میخوانیم
    // localStorage مثل یک کشوی کوچک در مرورگر است که داده‌ها را نگه میدارد
    const savedTodos = localStorage.getItem('todos');
    
    // خط 11: اگر چیزی ذخیره شده بود (یعنی null نبود)
    if (savedTodos) {
      // خط 12: JSON.parse متن ذخیره شده را به آرایه تبدیل می‌کند
      // چون localStorage فقط متن ذخیره می‌کند و آرایه بلد نیست
      setTodos(JSON.parse(savedTodos));
    }
  }, []); // [] یعنی فقط یک بار اجرا شو
  
  // ========== بخش 3: ذخیره اطلاعات در Local Storage هر بار که لیست تغییر کرد ==========
  
  // خط 13: هر وقت todos تغییر کرد (کار اضافه یا حذف یا ویرایش شد) این useEffect اجرا می‌شود
  useEffect(() => {
    // خط 14: JSON.stringify آرایه todos را به متن تبدیل می‌کند تا قابل ذخیره در localStorage باشد
    // با کلید 'todos' ذخیره می‌کنیم
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // [todos] یعنی هر وقت todos تغییر کرد اجرا شو
  
  // ========== بخش 4: تابع اضافه کردن کار جدید ==========
  
  // خط 15: useCallback باعث می‌شود این تابع بین رندرهای مختلف بازسازی نشود (بهینه‌سازی)
  const addTodo = useCallback(() => {
    // خط 16: inputValue.trim() فاصله‌های اول و آخر متن را حذف می‌کند
    // اگر بعد از حذف فاصله‌ها، متن خالی شد، کاری نکن و برگرد (return)
    if (inputValue.trim() === '') {
      return; // خارج شدن از تابع
    }
    
    // خط 17: ساخت یک شیء جدید برای کار جدید
    const newTodo = {
      // id: Date.now() - تعداد میلی‌ثانیه از سال 1970 تا حالا را برمی‌گرداند
      // این عدد همیشه یکتاست و برای شناسایی هر کار استفاده می‌شود
      id: Date.now(),
      // text: همان متنی که کاربر تایپ کرده، بدون فاصله‌های اضافه
      text: inputValue.trim()
    };
    
    // خط 18: آرایه جدید می‌سازیم
    // ...todos یعنی همه کارهای قبلی را کپی کن
    // سپس newTodo را به انتهای آرایه اضافه کن
    // این کار را می‌کنیم چون در React نباید مستقیم state را تغییر دهیم
    setTodos([...todos, newTodo]);
    
    // خط 19: input را خالی می‌کنیم برای کار بعدی
    setInputValue('');
  }, [inputValue, todos]); // به این دو تا وابسته است (اگر تغییر کنند، تابع دوباره ساخته می‌شود)
  
  // ========== بخش 5: تابع حذف کار ==========
  
  const deleteTodo = useCallback((id) => {
    // خط 20: filter یک آرایه جدید می‌سازد
    // اینجا می‌گوییم: فقط آن دسته از کارها را نگه دار که id آنها با id ورودی برابر نباشد
    // یعنی کاری که می‌خواهیم حذف کنیم، در آرایه جدید جایی ندارد
    setTodos(todos.filter(todo => todo.id !== id));
    
    // خط 21: اگر دقیقاً همین کار در حال ویرایش بود، حالت ویرایش را هم ببند
    if (editingId === id) {
      setEditingId(null);     // حالت ویرایش را خاموش کن
      setEditingText('');     // متن ویرایش را خالی کن
    }
  }, [todos, editingId]); // وابسته به todos و editingId
  
  // ========== بخش 6: توابع ویرایش ==========
  
  // خط 22: شروع ویرایش - وقتی کاربر روی دکمه Edit کلیک می‌کند
  const startEdit = useCallback((id, currentText) => {
    setEditingId(id);           // ذخیره می‌کنیم کدام کار دارد ویرایش می‌شود
    setEditingText(currentText); // متن فعلی کار را می‌ریزیم داخل input ویرایش
  }, []);
  
  // خط 23: ذخیره ویرایش - وقتی کاربر Enter زد یا از input خارج شد
  const saveEdit = useCallback((id) => {
    // خط 24: اگر متن خالی بود یا فقط فاصله بود، ذخیره نکن
    if (editingText.trim() === '') {
      return;
    }
    
    // خط 25: map روی همه کارها می‌گردد و یک آرایه جدید می‌سازد
    setTodos(todos.map(todo => {
      // اگر id این کار با id ورودی برابر بود
      if (todo.id === id) {
        // یک شیء جدید برمی‌گردانیم با همان id و متن جدید
        return { ...todo, text: editingText.trim() };
      }
      // وگرنه خود کار قبلی را برمی‌گردانیم (تغییری نمی‌کند)
      return todo;
    }));
    
    // خط 26: بعد از ذخیره، حالت ویرایش را تمام کن
    setEditingId(null);
    setEditingText('');
  }, [todos, editingText]);
  
  // خط 27: کنسل کردن ویرایش - وقتی کاربر Escape زد یا دکمه انصراف را زد
  const cancelEdit = useCallback(() => {
    setEditingId(null);   // حالت ویرایش را خاموش کن
    setEditingText('');   // متن ویرایش را پاک کن
  }, []);
  
  // ========== بخش 7: فیلتر کردن لیست (با useMemo برای بهینه‌سازی) ==========
  
  const filteredTodos = useMemo(() => {
    // خط 28: در این نسخه ساده، همه کارها را نشان می‌دهیم
    // (اگر بعداً خواستیم فیلتر اضافه کنیم، اینجا می‌توانیم شرط بگذاریم)
    return todos;
  }, [todos, filter]); // فقط وقتی todos یا filter تغییر کند دوباره محاسبه می‌شود
  
  // ========== بخش 8: آمارگیری ساده ==========
  
  // خط 29: تعداد کل کارها را حساب می‌کنیم
  const totalCount = todos.length;
  
  // ========== بخش 9: خروجی و نمایش در صفحه (JSX) ==========
  
  return (
    // خط 30: کانتینر اصلی با کلاس app-container
    <div className="app-container">
      <div className="todo-wrapper">
        
        {/* خط 31: عنوان اصلی */}
        <h1 className="title">
          📝 لیست کارهای من
          {/* خط 32: badge: تعداد کل کارها را نشان می‌دهد */}
          <span className="badge">{totalCount}</span>
        </h1>
        
        {/* خط 33: بخش اضافه کردن کار جدید */}
        <div className="add-section">
          {/* خط 34: input برای نوشتن کار جدید */}
          <input
            type="text"
            className="todo-input"
            placeholder="یک کار جدید اضافه کن..."
            value={inputValue}  // مقدار input به state متصل است
            onChange={(e) => setInputValue(e.target.value)}  // هر بار که کاربر تایپ می‌کند، state به‌روز می‌شود
            onKeyDown={(e) => {
              // خط 35: اگر کاربر کلید Enter را زد، کار را اضافه کن
              if (e.key === 'Enter') {
                addTodo();
              }
            }}
          />
          {/* خط 36: دکمه افزودن */}
          <button className="add-btn" onClick={addTodo}>
            ➕ افزودن
          </button>
        </div>
        
        {/* خط 37: بخش نمایش لیست کارها */}
        <div className="todo-list">
          {/* خط 38: اگر هیچ کاری در لیست نبود */}
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              <span className="empty-emoji">🎯</span>
              <p>هیچ کاری نیست!</p>
              <small>یک کار جدید اضافه کن...</small>
            </div>
          ) : (
            // خط 39: اگر کار وجود داشت، با map هر کدام را نمایش بده
            filteredTodos.map(todo => (
              // خط 40: هر کار یک div با کلاس todo-item
              // key={todo.id}: برای بهینه‌سازی React، هر آیتم نیاز به کلید یکتا دارد
              <div key={todo.id} className="todo-item">
                
                {/* خط 41: بخش محتوای کار */}
                <div className="todo-content">
                  {/* خط 42: اگر این کار در حال ویرایش است */}
                  {editingId === todo.id ? (
                    // خط 43: حالت ویرایش: یک input نشان بده
                    <input
                      type="text"
                      className="edit-input"
                      value={editingText}  // متن در حال ویرایش
                      onChange={(e) => setEditingText(e.target.value)}  // با هر تایپ، متن به‌روز می‌شود
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          saveEdit(todo.id);  // Enter: ذخیره کن
                        } else if (e.key === 'Escape') {
                          cancelEdit();       // Escape: انصراف
                        }
                      }}
                      onBlur={() => saveEdit(todo.id)}  // خارج شدن از input: ذخیره کن
                      autoFocus  // خودکار focus روی input می‌رود (برای راحتی کاربر)
                    />
                  ) : (
                    // خط 44: حالت عادی: متن کار را نشان بده
                    <span className="todo-text">{todo.text}</span>
                  )}
                </div>
                
                {/* خط 45: بخش دکمه‌های عملیات */}
                <div className="todo-actions">
                  {/* خط 46: اگر در حال ویرایش هستیم */}
                  {editingId === todo.id ? (
                    // خط 47: دکمه‌های مخصوص حالت ویرایش
                    <>
                      <button className="cancel-btn" onClick={cancelEdit}>
                        ✖ انصراف
                      </button>
                      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                        🗑 حذف
                      </button>
                    </>
                  ) : (
                    // خط 48: حالت عادی: دکمه‌های ویرایش و حذف
                    <>
                      <button className="edit-btn" onClick={() => startEdit(todo.id, todo.text)}>
                        ✏ ویرایش
                      </button>
                      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                        🗑 حذف
                      </button>
                    </>
                  )}
                </div>
                
              </div>
            ))
          )}
        </div>
        
      </div>
    </div>
  );
}

// خط 49: خروجی کامپوننت را برای استفاده در سایر فایل‌ها export می‌کند
export default App;