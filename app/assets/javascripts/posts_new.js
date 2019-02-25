$(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    let values = $(this).serialize()
    let posting = $.post('/posts', values)
    posting.done(function(post) {
      $('#postTitle').text(post['title'])
      $('#postBody').text(post['description'])
    })
  })
})