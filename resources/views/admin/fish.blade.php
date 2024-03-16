@extends('admin.partials.main')

@section('content')
<script>document.getElementById('current').innerHTML = "Fish"</script>
@if (Session('success'))
<div id="openModax"></div>
@endif
<div class="row">
  <div class="col-lg-4">
    <div class="card mb-4">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Add new fish</h5>
        <small class="text-muted float-end">Please fill up the form</small>
      </div>
      <div class="card-body">
        <form method="post" enctype="multipart/form-data" action="{{route('addFish')}}">
          @csrf
          <div class="mb-3">
            <label class="form-label" for="basic-default-fullname">Fish name @error('fish')<span class="text-danger">* Please fill up this field.</span>@enderror</label>
            <input type="text" class="form-control" name="fish" id="basic-default-fullname" placeholder="Fish name..." />
          </div>
          
          <div class="mb-3">
            <label class="form-label" for="basic-default-email">Color  @error('color')<span class="text-danger">* Please fill up this field.</span>@enderror</label>
            <div class="input-group input-group-merge">
              <input type="text" name="color" class="form-control" id="basic-default-company" placeholder="Fish color" />
             
            </div>
            <div class="form-text">Seperated by space, eg: red yellow, blue-green</div>
          </div>
          <div class="mb-3">
            <label class="form-label" for="basic-default-phone">Price  @error('price')<span class="text-danger">* Please fill up this field.</span>@enderror</label>
            <input
              type="number"
              name="price"
              id="basic-default-phone"
              class="form-control phone-mask"
              placeholder="00.00"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" for="basic-default-phone">Image  @error('image')<span class="text-danger">{{$message}}</span>@enderror</label>
            <input
            name="image"
              type="file"
              id="basic-default-phone"
              class="form-control phone-mask"
              placeholder="Choose file here..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label" for="basic-default-phone">Quantity  @error('quantity')<span class="text-danger">* Please fill up this field.</span>@enderror</label>
            <input
              type="number"
              name="quantity"
              id="basic-default-phone"
              class="form-control phone-mask"
              placeholder="Quantity..."
            />
          </div>
          <div class="mb-3">
            <label class="form-label" for="basic-default-message">Description  @error('description')<span class="text-danger">* Please fill up this field.</span>@enderror</label>
            <textarea
              id="basic-default-message"
              class="form-control"
              placeholder="Add a little description here..."
              name="description"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  </div>
  <div class="col-xl">
    <div class="card mb-4">
      
      <div id="fishTable"></div>


    </div>
  </div>
</div>

@endsection