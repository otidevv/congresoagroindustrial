$(function() {

    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      
      var link = this.el.find('.link');
      
      // Получаю значение текста меню из localStorage
      activeItemText = localStorage.getItem('activeItemText');
      
      // Если что-то есть
      if(activeItemText){
        //то проходу по всем пунктам меню
        link.each( function( index, item){
          
          // и сравниваю из текст с текстом из localstorage      
          if($(item).text() == activeItemText){
            // если текста совпадают, то открываю пункт меню
            $(item).parent().addClass('open').find('.submenu').slideToggle();
          }
        });
      }
  
      link.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown)
    }
  
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
     
      // При каждом клике сохраняю в localstorage текст
      // пунта меню, по которому был совершен клик
      localStorage.setItem('activeItemText', $(e.currentTarget).text());
  
        $next.slideToggle();
        $this.parent().toggleClass('open');
  
        if (!e.data.multiple) {
          $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
      }
  
    var accordion = new Accordion($('#accordion'), false);
    
  });
  