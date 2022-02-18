package com.growingio.hrctest;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;



public class MainActivity extends Activity {
    int[] images = new int[]{
            R.drawable.ajax,
            R.drawable.html,
            R.drawable.java,
            R.drawable.javaee,
            R.drawable.swift,
    };

    int currentImage = 0;

    @Override
    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//        LinearLayout mainLayout = (LinearLayout) findViewById(R.id.root);
//        mainLayout.addView(img);
//        img.setImageResource(images[currentImage]);

        int x = 10;
        double y = 0;
        y = x;//右低左高
        /** 创建空白图片控件在MainActivity里 ,MainActivity是一个window，可以塞不同的View */
//        final ImageView img = new ImageView(this);
        final ImageView img = findViewById(R.id.img);
        //执行回调式监听
        img.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                /** 监听空白组件的点击事件，并触发业务 */
                img.setImageResource(images[++currentImage % images.length]);
            }
        });
        //将img控件显示到屏幕上
//        setContentView(img);

        TextView textView = findViewById(R.id.num);
        textView.setBackgroundColor(Color.rgb(0,100,30));
        for(int i=1; i<10; i++){
            for(int j=1; j<=i; j++){
                textView.append(i+"*"+j+"="+i*j);
            }
            textView.append("\n");
        }

        TextView textView1 = findViewById(R.id.star);
        for(int i=1;i<5;i++){
            for(int j=1;j<i;j++){
                if(j==i) continue;
                textView1.append(" * ");
            }
            textView1.append("\n");
        }

    }
}

