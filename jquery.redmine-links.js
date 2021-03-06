/**
 * Usage.
 * 1. Set jQuery if not exists yet
 * 2. Set <script src="jquery.redmine-links.js"></script> after jQuery
 * 3. Run as:
 * $( function () {
 *     new JqueryRedmineLinks(
 *         'http://example.com/projects/project-name/issues/new',
 *         'http://example.com/projects/project-name/issues'
 *     );
 * });
 * where `example.com` replace with your redmine domain
 * and `project-name` replace with project name
 */
var JqueryRedmineLinks = function (newTaskLink, tasksListLink) {
    if (!newTaskLink || !tasksListLink) {
        return;
    }
    var _open, container, anchor, icon, containerCss, anchorCss, background;
    _open = function (link) {
        window.open(link, '_blank');
    };
    background = 'linear-gradient(#efefef, #ccc)';
    containerCss = {
        'position' : 'fixed',
        'left' : '50%',
        'bottom' : '0',
        'border-radius' : '8px 8px 0 0',
        'font-size' : '0',
        'padding' : '6px',
        'margin-left' : '-32px',
        'background' : '#efefef',
        'background' : 'linear-gradient(#ccc, #efefef)',
        'box-shadow' : '0 0 7px rgba(0,0,0,.25)',
        'border' : 'solid 1px #999',
        'border-bottom' : '0'
    };
    anchorCss = {
        'display' : 'inline-block',
        'width' : '25px',
        'height' : '25px',
        'border-radius' : '4px',
        'background' : '#ccc',
        'background' : background,
        'box-shadow' : '0 0 2px rgba(0,0,0,.5)'
    };
    container = $('<div class="redmine-links-container">').css(containerCss);
    anchor = $('<a href="#" class="new-task" title="Новая задача">').css(anchorCss);
    icon = $('<img>').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAAGz7rX1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAw5JREFUeNpi/P//PwMKAAnY2NhcB+LFIDYTVFwDiGNADEZ0LQABhCoA1LcOakY9zLB6IGZBUQYQQGAZqKwWEL+AslnBimCSUMH/QFwC48MEmYA4H0lRLogGCCAMt8EAC4xha2sLUsEMxMaHDx8+zYQk+BEo8A9IH0V3IQfIETA+TEcLkPoOxEpQ3RAJoBE1QGoiED8EYiesIQYDAAGEUwIfYELmAO2eB7IfiEuQxIKAuACrTUCJi0BKCOhOWajDvwHxVCAuBeIpQLwLKLcZp/OAmjqAVDksHmGBCw07DOe1QZnlQAWMIAxk6wHxXygmPyAAAohkTUyk2oCcakDuBuFToJQDxKlAPBfoH1DQuwLp3XANQAGQTdxA/BqIf0E9DU9+yHyYk1SB+ALUAJCJUUgGgehcIP6IrIEXlPKAWBmIlwPxUqCCVGiQ/oYaJIDsh7NAzAe0+jOQzgAq5gLSs0C2AcXYMEIJ5DEg9RXJGbGwYAfyGzE0QBWBJL/BnAH1KMjmOqB4L7oNoPTiAKRBTgElk2SouAmQugHERUBNUzFiGmrTKyCWBOI/MOcCxW8AaQ36JA2AACMrxVLFElhahGU4IF8KSMUDMScQrwOKX8CmDjn8kMUwLIEG8H9ooZ8DxJ5ArAjE/6CpDVRCghLSVqBB74HqWYFsUPQmAXEtUKyfWJ8YAqlNQCwDxD+B+CYorQAN2IhFbRmQagbiSqB8H5APKsOrgewmrJYAFSwFUlFQLiiZ1EMLfpgGUOmdBTRgAZIPctHsBTmqDaclUIu0gdQ8IF4JKkGBin8BxUBxMR0aLwxIhSUjNBhBvmwlK3WBIhaaP2Fx1QPEhUhKQL6tAKrpxZVosAUXeqoC1V3qQKwLxJlIBvcBMSjeXJEs7ATiGqDeP3h9AnM5kLaEpiJQhLIj1ScTgfIFSOo1gdQaINZCMnMa1HefseZeWNBAS1RmIL8eiCuQgmgnmq9vAuVBcWgOxPegUqDCKA5rZYCcR4Aav0P5oBQUDMSXQQ5Ci5//SOF+GshWBmVaIP1sQIoVAEJEtUgzmKRCAAAAAElFTkSuQmCC');
    container.append(anchor.append(icon));
    anchor = $('<a href="#" class="tasks-list" title="Список задач">').css(anchorCss).css('margin-left', '4px');
    icon = $('<img>').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAAGz7rX1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAb9JREFUeNpi/P//PwMKAAnY2NgwAbE9iM0EEwfiTyAGI7oWgABCEWCxtbWVB9IKQPyTBUj8gOr7jaIMIIAwDEEGIG0MQHOeAKlwID4CFf94+PBhAbw6AQIIpyQTIbtsgBQrEP8D8YH2HGSBKjiMbgVMwhBq7H/yLQcIILx+wetiqKvvASlFILYG4qNY1D4H+kQKRRMQmAOxLBCfA2ILmJeRwC8Mm4CAA4h5oWweIP6Ly1XImg4iOW8PFue9AGJJsgMCIIBI1sREqg1MlMQNyG0lQNyDTSEwXhjRQ8sFiE9BQ40bl0uQNXyHRtZXUGAQowGURCqAuANXiKJrcIdq2ofFSczYbHgHTU+fgfgPMU46jS+UYE4ahDENEGBkpViau4ocwIIuAEy7y4BUEKgEB+I4aFEBKggFsOR8dMAGxA+B6VsHryXQnM8OxfxAzAnEUtBimBggTNAnQOCIw4XUCy4gWAXE9qA6DojzocEFKu+4sJSu2OL4GRAbE7KEHVoKM0ODiBkaZBxEWsJOjE/8sYhJUTsJ74DWmiAcCcTK0ALjP7TQwIdBah4R45Ov0OT7G4pBQfQRmnyJScKfhm+OBwBbZI8OL6yBvQAAAABJRU5ErkJggg==');
    container.append(anchor.append(icon));
    $('body').append(container);
    container.on('click', 'a', function (e) {
        e.preventDefault();
        if ($(this).hasClass('new-task')) {
            var query = '?issue[description]=',
                text = '\nДанные о странице:' +
                    '\n* URL: *' + window.location.href +
                    '*\n* Предыдущая страница: *' + (document.referrer || 'нет') +
                    '*\n* Кодовое имя: *' + (navigator.appCodeName || 'нет') +
                    '*\n* Название: *' + (navigator.appName || 'нет') +
                    '*\n* Версия: *' + (navigator.appVersion || 'нет') +
                    '*\n* Куки: *' + (navigator.cookieEnabled || 'нет') +
                    '*\n* Язык: *' + (navigator.language || 'нет') +
                    '*\n* Операционка: *' + (navigator.platform || 'нет') +
                    '*\n* Движок: *' + (navigator.product || 'нет') +
                    '*\n* Агент: *' + (navigator.userAgent || 'нет') +
                    '*\n* Ширина экрана: *' + (screen.width || 'нет') +
                    '*\n* Высота экрана: *' + (screen.height || 'нет') +
                    '*\n* Глубина пикселя: *' + (screen.pixelDepth || 'нет') +
                    '*\n* Глубина цвета: *' + (screen.colorDepth || 'нет') +
                    '*';
            _open(newTaskLink + query + encodeURIComponent(text));
        } else {
            _open(tasksListLink);
        }
    }).find('a').hover( function () {
        $(this).css('background', 'linear-gradient(#ccc, #efefef)');
    }, function () {
        $(this).css('background', background);
    }).end();
};
