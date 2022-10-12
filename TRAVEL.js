


java(login):
package com.example.myfirstapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class loginactivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_loginactivity);

    }

    public void openMain3(View view) {
        startActivity(new Intent(this,registeractivity.class));
    }


}
xml(login):
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/img1"
    tools:context=".loginactivity">

    <EditText
        android:id="@+id/inputemail"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="32dp"
        android:layout_marginLeft="32dp"
        android:layout_marginTop="16dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:layout_marginBottom="32dp"
        android:background="@drawable/input_bg"
        android:drawableLeft="@drawable/ic_email"
        android:drawablePadding="10dp"
        android:ems="10"
        android:hint="EMAIL:"
        android:inputType="textPersonName"
        android:paddingLeft="20dp"
        android:paddingTop="10dp"
        android:paddingRight="10dp"
        android:paddingBottom="10dp"
        android:textColorHint="#673AB7"
        app:layout_constraintBottom_toBottomOf="@+id/textView"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="1.0"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/inputPassword"
        app:layout_constraintVertical_bias="0.518" />

    <EditText
        android:id="@+id/inputPassword"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="32dp"
        android:layout_marginLeft="32dp"
        android:layout_marginTop="128dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:background="@drawable/input_bg"
        android:drawableLeft="@drawable/ic_person"
        android:drawablePadding="10dp"
        android:ems="10"
        android:hint="USERNAME:"
        android:inputType="textPersonName"
        android:paddingLeft="20dp"
        android:paddingTop="10dp"
        android:paddingRight="10dp"
        android:paddingBottom="10dp"
        android:textColor="#9C27B0"
        android:textColorHint="#673AB7"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.0"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/textView" />

    <TextView
        android:id="@+id/textView"
        android:layout_width="256dp"
        android:layout_height="63dp"
        android:text="login"
        android:textColor="#FF4081"
        android:textSize="36sp"
        android:textStyle="bold"
        app:flow_horizontalAlign="center"
        app:flow_verticalAlign="center"
        tools:layout_editor_absoluteX="150dp"
        tools:layout_editor_absoluteY="40dp" />

    <TextView
        android:id="@+id/forgotpassword"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="16dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:text="Forgot password?"
        android:textColor="#FF5252"
        android:textSize="24sp"
        android:textStyle="bold|italic"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/inputPassword" />

    <Button
        android:id="@+id/textviewsignup"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="32dp"
        android:layout_marginLeft="32dp"
        android:layout_marginTop="16dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:background="@drawable/btn_bg"
        android:onClick="openMain3"
        android:text="LOGIN"
        android:textColor="#FFD740"
        android:textSize="24sp"
        android:textStyle="bold|italic"
        app:backgroundTint="#FF4081"
        app:layout_constraintBottom_toBottomOf="@+id/linearLayout"
        app:layout_constraintEnd_toEndOf="@+id/inputPassword"
        app:layout_constraintHorizontal_bias="1.0"
        app:layout_constraintStart_toStartOf="@+id/inputPassword"
        app:layout_constraintTop_toBottomOf="@+id/forgotpassword" />

    <LinearLayout
        android:id="@+id/linearLayout"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginTop="16dp"
        android:gravity="center"
        android:orientation="horizontal"
        android:textAlignment="center"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.0"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/textviewsignup">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Don't have an account?"
            android:textColor="@color/design_default_color_primary_dark" />

        <TextView
            android:id="@+id/signup"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="SignUp"
            android:textColor="@color/cardview_dark_background" />
    </LinearLayout>

    <Button
        android:id="@+id/btnfacebook"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="32dp"
        android:layout_marginLeft="32dp"
        android:layout_marginTop="24dp"
        android:layout_marginEnd="8dp"
        android:layout_marginRight="8dp"
        android:background="@drawable/btn_bg"
        android:text="FACEBOOK"
        android:textColor="#AD1457"
        app:backgroundTint="#B9F6CA"
        app:layout_constraintEnd_toStartOf="@+id/btngoogle"
        app:layout_constraintHorizontal_bias="0.5"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/linearLayout" />

    <Button
        android:id="@+id/btngoogle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="8dp"
        android:layout_marginLeft="8dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:background="@drawable/btn_bg"
        android:text="GOOGLE"
        android:textColor="#AD1457"
        app:backgroundTint="#B9F6CA"
        app:layout_constraintBottom_toBottomOf="@+id/btnfacebook"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.5"
        app:layout_constraintStart_toEndOf="@+id/btnfacebook"
        app:layout_constraintTop_toTopOf="@+id/btnfacebook" />


</androidx.constraintlayout.widget.ConstraintLayout>
java(register):
package com.example.myfirstapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class registeractivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registeractivity);

    }

    public void openMain4(View view) {

        startActivity(new Intent(this,exploreactivity.class));
    }


}
xml(register):
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".registeractivity"
    android:background="@drawable/img5">

    <TextView
        android:id="@+id/textView"
        android:layout_width="256dp"
        android:layout_height="63dp"
        android:layout_marginStart="32dp"
        android:layout_marginLeft="32dp"
        android:layout_marginTop="24dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:layout_marginBottom="24dp"
        android:paddingLeft="10dp"
        android:paddingTop="20dp"
        android:paddingRight="10dp"
        android:paddingBottom="10dp"
        android:text="Time to travel"
        android:textColor="#880E4F"
        android:textSize="30sp"
        android:textStyle="bold|italic"
        app:flow_horizontalAlign="center"
        app:flow_verticalAlign="center"
        app:layout_constraintBottom_toTopOf="@+id/inputPassword"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/textView3" />

    <EditText
        android:id="@+id/inputPassword"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="32dp"
        android:layout_marginLeft="32dp"
        android:layout_marginTop="40dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:background="@drawable/input_bg"
        android:drawableLeft="@drawable/ic_person"
        android:drawablePadding="10dp"
        android:ems="10"
        android:hint="USERNAME:"
        android:inputType="textPersonName"
        android:paddingLeft="10dp"
        android:paddingTop="20dp"
        android:paddingRight="10dp"
        android:paddingBottom="10dp"
        android:textColor="#9C27B0"
        android:textColorHint="#673AB7"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.0"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/textView" />

    <EditText
        android:id="@+id/inputemail"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="32dp"
        android:layout_marginLeft="32dp"
        android:layout_marginTop="16dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:background="@drawable/input_bg"
        android:drawableLeft="@drawable/ic_email"
        android:drawablePadding="10dp"
        android:ems="10"
        android:hint="EMAIL:"
        android:inputType="textPersonName"
        android:paddingLeft="10dp"
        android:paddingTop="20dp"
        android:paddingRight="10dp"
        android:paddingBottom="10dp"
        android:textColorHint="#673AB7"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/inputPassword" />

    <EditText
        android:id="@+id/inputpassword"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="32dp"
        android:layout_marginLeft="32dp"
        android:layout_marginTop="16dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:background="@drawable/input_bg"
        android:drawableLeft="@drawable/ic_security"
        android:drawablePadding="10dp"
        android:ems="10"
        android:hint="PASSWORD:"
        android:inputType="textPersonName"
        android:paddingLeft="10dp"
        android:paddingTop="20dp"
        android:paddingRight="10dp"
        android:paddingBottom="10dp"
        android:textColorHint="#673AB7"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/inputemail" />

    <EditText
        android:id="@+id/inputconfirmpassword"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="32dp"
        android:layout_marginLeft="32dp"
        android:layout_marginTop="16dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:background="@drawable/input_bg"
        android:drawableLeft="@drawable/ic_security"
        android:drawablePadding="10dp"
        android:ems="10"
        android:hint="CONFIRM PASSWORD:"
        android:inputType="textPersonName"
        android:paddingLeft="10dp"
        android:paddingTop="20dp"
        android:paddingRight="10dp"
        android:paddingBottom="10dp"
        android:textColorHint="#673AB7"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/inputpassword" />

    <Button
        android:id="@+id/button"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginTop="64dp"
        android:background="@drawable/btn_bg"
        android:text="REGISTER"
        android:onClick="openMain4"
        app:backgroundTint="#E91E63"
        app:layout_constraintEnd_toEndOf="@+id/inputconfirmpassword"
        app:layout_constraintHorizontal_bias="0.0"
        app:layout_constraintStart_toStartOf="@+id/inputconfirmpassword"
        app:layout_constraintTop_toBottomOf="@+id/inputconfirmpassword" />

    <TextView
        android:id="@+id/textView2"
        android:layout_width="0dp"
        android:layout_height="16dp"
        android:layout_marginStart="32dp"
        android:layout_marginLeft="32dp"
        android:layout_marginTop="16dp"
        android:layout_marginEnd="32dp"
        android:layout_marginRight="32dp"
        android:layout_marginBottom="232dp"
        android:text="               Already have an account?"
        android:textAppearance="@style/TextAppearance.AppCompat.Body1"
        android:textColor="#1A237E"
        android:textSize="14sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="@+id/button"
        app:layout_constraintHorizontal_bias="0.0"
        app:layout_constraintStart_toStartOf="@+id/button"
        app:layout_constraintTop_toBottomOf="@+id/button"
        app:layout_constraintVertical_bias="0.62" />

    <TextView
        android:id="@+id/textView3"
        android:layout_width="183dp"
        android:layout_height="74dp"
        android:layout_marginStart="138dp"
        android:layout_marginLeft="138dp"
        android:layout_marginTop="68dp"
        android:layout_marginEnd="138dp"
        android:layout_marginRight="138dp"
        android:layout_marginBottom="24dp"
        android:paddingLeft="10dp"
        android:paddingTop="20dp"
        android:paddingRight="10dp"
        android:paddingBottom="10dp"
        android:text="GO TRIP"
        android:textColor="#C62828"
        android:textColorHint="#C62828"
        android:textSize="36sp"
        android:textStyle="bold|italic"
        app:flow_horizontalAlign="center"
        app:flow_verticalAlign="center"
        app:layout_constraintBottom_toTopOf="@+id/textView"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizo

